import React,{useState} from "react";
function App(){
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1710938310939-454ff59ec78a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" alt="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          photo created by Fatima Rahimi
        </div>
        <ul>
          <li><strong>Views:</strong>
          4000</li>
          <li><strong>Downloads:</strong>
          300</li>
          <li><strong>Likes:</strong>
          200</li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
        mr-2">
          #tag1
        </span>
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
        mr-2">
          #tag2
        </span>
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
        mr-2">
          #tag3
        </span>

      </div>
    </div>
  )
}

export default App;