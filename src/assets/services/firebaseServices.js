import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from "../../firebase";

export const buscarTreinos = async () => {
  const snap = await getDocs(collection(db, "treinos"));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const buscarExercicios = async (treinoId) => {
  const q = query(collection(db, "exercicios"), where("treinoId", "==", treinoId));
  const snap = await getDocs(q);
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const adicionarExercicio = async (exercicio) => {
  await addDoc(collection(db, "exercicios"), exercicio);
}

export const deletarExercicio = async (id) => {
  await deleteDoc(doc(db, "exercicios", id));
}

export const alterarExercicio = async (id, dados) => {
  await updateDoc(doc(db, "exercicios", id), dados);
}

export const checkExercicio = async (id, feito) => {
  await updateDoc(doc(db, "exercicios", id)), { check: feito };
}

export const resetarTreino = async (treinoId) => {
  const q = query(collection(db, "exercicios"), where("treinoId", "==", treinoId));
  const snap = await getDocs(q);
  snap.docs.forEach(async (doc) => {
    await updateDoc(doc.ref, { check: false })
  });
}
