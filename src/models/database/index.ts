import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { ADMIN_SKD } from '../../constants';

// Método para inicializar la App FIRESTORE
initializeApp({
	credential: cert(ADMIN_SKD),
});   

const firestore = getFirestore();

export default firestore;
