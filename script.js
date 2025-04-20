
function respond() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let response = "Sorry, I don't understand that question.";

  if (input.includes("food")) {
    response = "Try the Food Bank at 456 Hope Ave — open until 6PM.";
  } else if (input.includes("shelter")) {
    response = "Stockton Shelter at 123 Safe St. 25 has beds available.";
  } else if (input.includes("transport")) {
    response = "Free bus vouchers are available at the shelter desk.";
  } else if (input.includes("veteran")) {
    response = "Call the VA Support Line at 800-555-1212 for help.";
  } else if (input.includes("mental health")) {
    response = "Call the CalHope Line at 833-317-4673";
  } else if (input.includes("rehab center")) {
    response = "Call the Gospel Center Rescue Mission (GCRM) Line at 209-466-2138";
  } else if (input.includes("medical")) {
    response = "Call Covered CA at 800-300-1506";
  } else if(input.includes("legal")) {
    response = "Call the California Rural Legal Assistance, INC. (CRLA) Line at 209-946-0605  "
  } 


  
  document.getElementById("aiResponse").textContent = response;
}
