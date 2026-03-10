import { db } from "./firebaseconfig.js";
import {
  collection, addDoc, getDocs, updateDoc, doc, deleteDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

/* SERVICES */
window.addService = async () => {
  await addDoc(collection(db, "services"), {
    name: document.getElementById("serviceName").value
  });
  alert("Service Added");
};

/* PRODUCTS */
window.addProduct = async () => {
  const prdName = document.getElementById("productName");
  const prdPrice = document.getElementById("productPrice");
  const prdDesc = document.getElementById("productDesc");
  const prdImg = document.getElementById("productImg");

  await addDoc(collection(db, "products"), {
    name: prdName ? prdName.value : "",
    price: prdPrice ? prdPrice.value : "",
    desc: prdDesc ? prdDesc.value : "",
    img: prdImg ? prdImg.value : ""
  });
  alert("Product Added");
};

/* CONTACT */
window.saveContact = async () => {
  await updateDoc(doc(db, "settings", "contact"), {
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value
  });
  alert("Saved");
};

/* REVIEWS */
async function loadReviews() {
  const snap = await getDocs(collection(db, "reviews"));
  const reviewsEl = document.getElementById("reviews");
  if (!reviewsEl) return;
  reviewsEl.innerHTML = "";
  snap.forEach(d => {
    if (!d.data().approved) {
      reviewsEl.innerHTML += `
        <div>
          <b>${d.data().name}</b>
          <p>${d.data().message}</p>
          <button onclick="approve('${d.id}')">Approve</button>
          <button onclick="del('${d.id}')">Delete</button>
        </div>`;
    }
  });
}

window.approve = async id =>
  await updateDoc(doc(db, "reviews", id), { approved: true });

window.del = async id =>
  await deleteDoc(doc(db, "reviews", id));

loadReviews();
