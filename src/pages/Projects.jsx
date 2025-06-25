import React from "react";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 px-4 py-16 flex justify-center items-start">
      <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-3xl animate-fade-in transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Projects</h2>
        <div className="space-y-6">

          {/* LawyerUp */}
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">LawyerUp</h3>
            <p className="text-gray-700">
              A chatbot that recommends lawyers based on user input using decision trees and keyword analysis.
            </p>
          </div>

          {/* Canvas Clone */}
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Canvas Clone</h3>
            <p className="text-gray-700">
              A student information system with course management, grading, and notifications.
            </p>
          </div>

          {/* Sales and Customer Insights Dashboard */}
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sales and Customer Insights Dashboard</h3>
            <p className="text-gray-700">
              Built using Python, SQL, and Power BI to preprocess 2,000+ records from Excel and cloud sources, improving processing by 20%.
              Developed an interactive dashboard visualizing sales trends and demographics, using DAX to uncover 5+ insights on retention and revenue growth.
            </p>
          </div>

          {/* Customer Segmentation and Predictive Analytics */}
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customer Segmentation and Predictive Analytics</h3>
            <p className="text-gray-700">
              Used Alteryx, Python, and Snowflake to segment and analyze 1,500 customer records. Built K-Means and Logistic Regression models with up to 75% accuracy.
              Power BI reports identified 3 key customer groups and provided predictive marketing insights.
            </p>
          </div>

          {/* Financial Risk Analysis and Forecasting System */}
          <div className="bg-white/80 border border-white/40 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Financial Risk Analysis and Forecasting System</h3>
            <p className="text-gray-700">
              Developed an SSIS and Snowflake ETL pipeline to compute financial risk metrics. Implemented ARIMA forecasting models in Python with 85% accuracy.
              Visualized loan default trends and insights in Tableau to support decision-making.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
