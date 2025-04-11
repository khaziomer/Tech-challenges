import React, { useEffect } from 'react';
import RootLayout from '../Layout';
import cisco from "../assets/allies/cisco.png";
import dynamic from "../assets/allies/microsoft-dynamics.png";
import grandstream from "../assets/allies/grandstream.png";
import huawei from "../assets/allies/huawei.png";
import fortinet from "../assets/allies/fortinet.png";
import dell from "../assets/allies/dell.png";
import visualStudio from "../assets/allies/visual-studio.png";
import microsoft from "../assets/allies/microsoft.png";
import barracuda from "../assets/allies/Barracuda.png";
import php from "../assets/allies/php.png";
import quest from "../assets/allies/Quest.png";
import symantec from "../assets/allies/Symantec.png";
import sectona from "../assets/allies/Sectona.png";
import xamarin from "../assets/allies/Xamarin.png";

const companies = [
  { name: 'Cisco', image: cisco },
  { name: 'Microsoft Dynamic', image: dynamic },
  { name: 'Grandstream', image: grandstream },
  { name: 'Huawei', image: huawei },
  { name: 'Fortinet', image: fortinet },
  { name: 'Dell', image: dell },
  { name: 'Visual Studio', image: visualStudio },
  { name: 'Microsoft', image: microsoft },
  { name: 'Barracuda', image: barracuda },
  { name: 'PHP', image: php },
  { name: 'Quest', image: quest },
  { name: 'Symantec', image: symantec },
  { name: 'Sectona', image: sectona },
  { name: 'Xamarin', image: xamarin },
];

export default function Collab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
      document.title = "Collabration"
    }, [])

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            Our Collaborations
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            We are proud to collaborate with these esteemed companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <div className="w-64 h-40 mb-4">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}