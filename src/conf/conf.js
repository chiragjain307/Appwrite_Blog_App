const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABADE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;

// VITE_APPWRITE_URL = "https://cloud.appwrite.io/v1"
// VITE_APPWRITE_PROJECT_ID = "65da3a0b8bb95a87d420"
// VITE_APPWRITE_DATABADE_ID = "65da3adfbd27d1339658"
// VITE_APPWRITE_COLLECTION_ID = "65da3af4035ea9f403a3"
// VITE_APPWRITE_BUCKET_ID = "65da3c4cde0476b59006"