"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
// import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function addArticle(formData: FormData, contentData: string) {
  const session = await auth();
  const userId = session?.user?.id;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const content = contentData;
  const image = formData.get("image") as File | null;
  console.log(formData);

  if (!userId) {
    throw new Error("Could not retrieve userId");
  }

  if (!title || !content || !category || !userId) {
    throw new Error("Title, UserId, content and category are required");
  }

  const supabaseUrl = "https://rshmysuerqsijwntarbn.supabase.co";
  let imageUrl = "";

  if (image) {
    const filePath = `${Date.now()}-${image.name}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("article-images") // Your Supabase storage bucket
      .upload(filePath, image);

    if (uploadError) {
      throw new Error("Error uploading image: " + uploadError.message);
    }
    const imagePath = `${supabaseUrl}/storage/v1/object/public/article-images/${filePath}`;
    imageUrl = imagePath;
    // Get public URL of the uploaded image
    // const { data } = supabase.storage
    //   .from("article-images")
    //   .getPublicUrl(filePath);
    // imageUrl = data.publicUrl;
  }

  // Insert into the articles table
  const { error } = await supabase
    .from("articles")
    .insert([
      { title, content, category, image_url: imageUrl, author_id: userId },
    ]);

  if (error) {
    throw new Error("Error saving article: " + error.message);
  }

  return { success: true };
}

export async function createAppUser(newUser) {
  const { data, error } = await supabase.from("App_Users").insert([newUser]);
  if (error) {
    console.error(error);
    throw new Error("User Could not be created");
  }
  return data;
}
export async function getAppUsers() {
  let { data: App_Users, error } = await supabase.from("App_Users").select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not retrieve Users");
  }
  return App_Users;
}

export async function deleteArticle(id) {
  //work on this delete function to only allow users to delete meals they have created ie with their user id
  
  const { data, error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    throw error;
  }
  console.log("Delete Article Successful", data);
  revalidatePath("/admin"); //revalidate the router cache
  return data;
}

export async function signInAction() {
  //get the provider dynamically

  await signIn("google", { redirectTo: "/" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}

