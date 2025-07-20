"use client";

import { useState } from "react";
import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { fetchOceanTraits } from "@/lib/fetchOceanTraits";
import { useRouter } from "next/navigation";
import { traitInfo } from "@/Data/constants";

export default function PersonalityInput() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const data = await fetchOceanTraits(inputText);
      const topTrait = data.predicted_traits?.[0];

      if (topTrait && traitInfo[topTrait]) {
        setResult(traitInfo[topTrait]);
      } else {
        setResult({
          label: null,
          interpretation: null,
          suggestions: null,
        });
      }
    } catch (error) {
      console.error("Error analyzing text:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="pt-20 md:pt-30 min-h-screen px-4 bg-[#f6ede6] flex flex-col items-center justify-start">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-6 text-stone-800">
            Describe yourself or a friend!
          </h1>

          <textarea
            rows={6}
            className="w-full border border-gray-300 rounded-lg p-4 shadow-sm bg-white text-stone-800"
            placeholder="E.g. My friend is loves exploring new things and travelling the world..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading && inputText.trim()) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          <button
            className="mt-6 bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition"
            onClick={handleSubmit}
            disabled={loading || inputText.trim() === ""}
          >
            {loading ? "Analyzing Personality..." : "Show Insights"}
          </button>

          {loading && (
            <div className="mt-6 text-stone-600 text-sm">
              Warming up... this may take a few seconds on first run.
            </div>
          )}

          {result && (
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 text-left text-stone-800">
              {result.label ? (
                <>
                  <h2 className="text-xl font-semibold mb-2">
                    Dominant Trait: {result.label}
                  </h2>
                  <p className="mb-2">
                    <span className="font-medium">Interpretation:</span>{" "}
                    {result.interpretation}
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4 text-red-700">
                    Hmm... we couldn&apos;t detect a clear trait.
                  </h2>
                  <p className="text-stone-700 mb-4">
                    Try being more specific or descriptive. For example, mention
                    how your child plays, behaves around others, or what excites
                    them most.
                  </p>
                  <p className="text-stone-600 italic">
                    E.g. “My child is always curious, asks lots of questions,
                    and loves painting and drawing.”
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 text-justify text-stone-600 text-sm">
            * Disclaimer, this analysis may not be 100% accurate! Model is
            definitely a work in progress in terms of accuracy!
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
