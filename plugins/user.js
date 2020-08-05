export default ({ app, redirect }, inject) => {
  inject("user", async () => {
    // plugins/auth.jsを利用して、ログイン中かどうかを判定する
    const auth = await app.$auth();
    if (!auth) {
      redirect("/login");
    }
    const usersSnapShot = await app.$firestore
      .collection("users")
      .doc(auth.uid)
      .get();

    const user = usersSnapShot.data();
    if (!user) return null;

    return {
      uid: auth.uid,
      ...user
    };
  });
};
