// import React, { useState } from 'react';

// const EditProfilePage: React.FC = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // backend!!!
//     alert(`User Info:\nName: ${name}\nAddress: ${address}\nEmail: ${email}`);

//     // Reset the form (optional)
//     setName('');
//     setAddress('');
//     setEmail('');
//   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               placeholder="Enter your name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
// //               Address
// //             </label>
// //             <input
// //               type="text"
// //               id="address"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               placeholder="Enter your address"
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>
// //           <div className="flex items-center justify-between">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //             >
// //               Save Changes
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// export default EditProfilePage;
