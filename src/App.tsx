import React from "react";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Welcome to INTROVERTED.AI
        </h1>
        <p className="text-secondary text-lg max-w-xl mx-auto">
          We put AI at the center of everything we automate.
        </p>
      </section>
    </Layout>
  );
};

export default App;
