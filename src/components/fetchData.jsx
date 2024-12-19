// import supabase from "./supabaseClient"
// // Function to fetch all data from the 'data' table
// async function fetchAllData() {
//   try {
//     const { data, error } = await supabase
//       .from('data')  // Name of the table
//       .select('*');  // Select all columns

//     // Check for any error
//     if (error) {
//       throw error;
//     }

//     // Return the fetched data (it's already in JSON format)
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;  // Return null in case of error
//   }
// }

// export default fetchAllData;
