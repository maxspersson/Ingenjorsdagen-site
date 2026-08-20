export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body?.name?.trim();
    const email = body?.email?.trim();

    const source = body?.source?.trim() || "";
    const medium = body?.medium?.trim() || "";
    const campaign = body?.campaign?.trim() || "";
    const content = body?.content?.trim() || "";

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const appsScriptUrl =
      "https://script.google.com/macros/s/AKfycbzkysbrKX1LT-8-jLLUspZeU68UGa2J0Oy89WM4MR81N6nCLmrE6IhE5tNqzI2pTYOf/exec";

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        source,
        medium,
        campaign,
        content,
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Google Apps Script request failed.");
    }

    const data = await response.json();

    if (!data.success) {
      return Response.json(data, {
        status: 400,
      });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Pre-registration error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}