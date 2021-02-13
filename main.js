var names=[
    "Julia Jindow (Me)", "Jindow Joseph", "K.V Joseph", "Santha T.A", "Jimy Mathews", "Jenilia Jindow"];
    var album=[
    "https://obj.whitehatjr.com/eb170a0a-f161-4c11-96c2-59e50878e24f.jpg", 
    "https://obj.whitehatjr.com/4526e1ad-0e3e-44de-93cf-5b738837f481.jpg",
    "https://obj.whitehatjr.com/3e4d8ce9-422d-4b6d-80f7-accdc9c91c9e.jpg",
    "https://obj.whitehatjr.com/90a8a207-b694-41ec-bd55-1b33893665b9.jpg",
    "https://obj.whitehatjr.com/240494dd-9098-460a-adea-3905e0154e1e.jpg",
    "https://obj.whitehatjr.com/93b3fef4-4c77-4e79-9e22-4a3cd5f2dc22.jpg"
    ];
    var i = 0;
    function nextSlide(){
    document.getElementById("album").src=album[i];
    document.getElementById("nametext").innerHTML=names[i];
    i++;
    }