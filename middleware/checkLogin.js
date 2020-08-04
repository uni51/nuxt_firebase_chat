export default async function({ redirect, app }) {
  // 同期処理にするため await をつける
  if (await app.$auth()) {
    // ログイン中だったらTOPページに遷移する
    redirect("/");
  }
}
