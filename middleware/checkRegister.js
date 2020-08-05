export default async function({ redirect, app }) {
  // plugins/user.jsを呼び出す
  if (await app.$user()) {
    // すでにアカウント作成済の場合はTOPページにリダイレクト
    redirect("/");
  }
}
