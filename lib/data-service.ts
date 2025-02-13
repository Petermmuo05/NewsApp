import { auth } from "./auth";
import { supabase } from "./supabase";

export async function fetchArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, title, image_url, created_at,category, content, App_Users(email, full_name)"
    );

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
  console.log(data);

  return data;
}

export async function fetchAuthorArticles() {
  const session = await auth();
  const userId = session?.user?.id;
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("author_id", userId);

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
  console.log(data);

  return data;
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, image_url, created_at,category, content")
    .eq("id", id)
    .single(); // Get only one result

  if (error) {
    console.error("Error fetching article:", error.message);
    return null;
  }

  return data;
}

export async function getSingleAppUser(email) {
  let { data: App_Users, error } = await supabase
    .from("App_Users")
    .select("*")
    .eq("email", email)
    .single();
  //no error handling here. We handle the possibility of no guest in the sign in callback
  return App_Users;
}
