import React from "react";

const Suggestion = () => {
  return (
    <section id="suggestion">
      <div className="container mx-auto p-6">
        <div className="mt-8 flex-flex-col items-center justify-center">
          <h1 className="text-4xl font-bold font-eudoxus text-center text-darkGrayishBlue">
            Make a Suggestion
          </h1>
          <div className="mt-10 flex flex-col">
            <div className="flex items-center justify-center gap-1">
              <input
                type="text"
                className="bg-transparent text-xl border border-solid-darkGrayishBlue rounded-lg p-4 w-[300px] outline-none md:w-[500px] lg:w-[600px]"
                placeholder="Suggestions"
              />
              <button className="p-4 bg-slate-600 rounded-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
