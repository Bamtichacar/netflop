import React, {useState} from 'react';

const Home = ({ plans, onSelectPlan }) => {
    const [selectedPlan, setSelectedPlan] = useState(null); 
    const handleSelectPlan = (planName) => { setSelectedPlan(planName); };
      
  return (
    <div className="bg-gray-900 py-16">
    <div className="container mx-auto px-4"> 
        <h1 className="text-6xl text-gray-200 leading-relaxed text-center">"Bienvenue sur Netflop"</h1>
        <h2 className="text-4xl text-gray-400 leading-relaxed text-center">
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    </h2>
      <div className="flex justify-around">
        {plans.map((plan, index) => (
      <div className="bg-white w-64 h-96 content-center  rounded-lg shadow-lg p-8">
        <div key={index} className="border p-4 rounded shadow-lg">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-center text-orange-500 mt-4">{plan.name}</h2>
                <p className="text-gray-500 text-center text-sm mt-2">{plan.price}</p>
                <ul className="mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-1">{feature}</li>
              ))}
            </ul>
                
            </div>
        
          
            
            <p className="text-lg mb-2">{plan.price}</p>
            
            <button
              onClick={() => onSelectPlan(plan.name)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              S'abonner
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
