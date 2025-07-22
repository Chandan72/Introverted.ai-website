import React, { useState } from "react";

const AiOpportunity = () => {
  const [industry, setIndustry] = useState("E-commerce & Retail");
  const [companySize, setCompanySize] = useState("Solo Entrepreneur");
  const [challenges, setChallenges] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [resultText, setResultText] = useState("");

  // Use Vite's import.meta.env for environment variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setResultText("");

    if (!challenges.trim()) {
      alert("Please describe your challenges to get an analysis.");
      return;
    }

    setLoading(true);

    const prompt = `You are an expert AI automation consultant for an agency named 'Introverted.AI'.
A potential client from the '${industry}' sector with a company size of '${companySize}' has described their challenges as: '${challenges}'.

Based on this information, generate a list of 3 specific, high-impact AI automation opportunities for their business.
For each opportunity, provide:
1. A clear title for the opportunity.
2. A concise, one-sentence description of the solution.
3. A bulleted list of 2-3 key benefits (e.g., time saved, cost reduction, increased efficiency, improved customer engagement).

Your tone should be professional, encouraging, and expert. Frame the response as if you are presenting initial ideas to a new client.
`;

    try {
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();

      let text = "";
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        text = result.candidates[0].content.parts[0].text;
      } else {
        throw new Error("Unexpected response format from API.");
      }

      setResultText(text);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    if (!text) return null;
    let formattedHtml = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n\s*\*\s/g, '</li><li class="flex items-start mt-2"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>')
      .replace(/<\/li>/, "")
      .replace(/(\n\n)/g, '<hr class="my-6 border-gray-200">')
      .replace(/\n/g, "<br>");

    if (formattedHtml.includes("<li")) {
      formattedHtml = "<ul>" + formattedHtml + "</li></ul>";
    }

    return <div dangerouslySetInnerHTML={{ __html: formattedHtml }} />;
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-blue">Discover Your AI Potential</h1>
        <p className="mt-3 text-lg text-charcoal-gray max-w-2xl mx-auto">
          Tell us about your business, and our AI will identify the best automation opportunities for you.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="col-span-1">
          <label htmlFor="industry" className="block text-sm font-medium text-charcoal-gray mb-2">
            Your Industry
          </label>
          <select
            id="industry"
            name="industry"
            className="form-input w-full px-4 py-3 bg-light-gray border border-gray-300 rounded-lg"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            {["E-commerce & Retail", "Healthcare", "Finance & Banking", "SaaS & Technology", "Real Estate", "Manufacturing", "Education", "Other"].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="company-size" className="block text-sm font-medium text-charcoal-gray mb-2">
            Company Size
          </label>
          <select
            id="company-size"
            name="company-size"
            className="form-input w-full px-4 py-3 bg-light-gray border border-gray-300 rounded-lg"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
          >
            {["Solo Entrepreneur", "1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="challenges" className="block text-sm font-medium text-charcoal-gray mb-2">
            What are your biggest challenges or most repetitive tasks?
          </label>
          <textarea
            id="challenges"
            name="challenges"
            rows={4}
            className="form-input w-full px-4 py-3 bg-light-gray border border-gray-300 rounded-lg"
            placeholder="e.g., Managing customer support tickets, manually entering sales data, onboarding new clients..."
            value={challenges}
            onChange={(e) => setChallenges(e.target.value)}
          />
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-steel-blue hover:bg-steel-blue-dark text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "✨ Analyze My Business"}
          </button>
        </div>
      </form>

      {/* Results Section */}
      {loading && (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="loader"></div>
          <p className="mt-4 text-charcoal-gray font-medium">
            Our AI is analyzing your business... this may take a moment.
          </p>
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-500 font-medium">
            Sorry, we encountered an error. Please try again.
          </p>
        </div>
      )}

      {resultText && !loading && !error && (
        <div className="p-6 bg-light-gray rounded-lg border border-gray-200">
          {renderFormattedText(resultText)}
        </div>
      )}

      {/* Call to Action */}
      {!loading && !error && resultText && (
        <div className="text-center mt-8">
          <p className="text-lg text-charcoal-gray">Ready to take the next step?</p>
          <a
            href="#contact"
            className="inline-block mt-3 bg-navy-blue text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Schedule a Free Consultation
          </a>
        </div>
      )}
    </div>
  );
};

export default AiOpportunity;
