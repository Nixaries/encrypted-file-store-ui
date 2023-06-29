export default function Files() {
  let fileInput: HTMLInputElement|undefined;

  function onClickNewFile() {
    if(fileInput)
    {
      fileInput.click();
    }
  }

  return (
    <>
      <div class="bg-slate-200 py-10 w-full h-full flex">
        <div class="bg-white w-5/6 mx-auto rounded-lg shadow-md">
          <div class="m-5 flex content-center">
            <h1 class="text-3xl font-semibold">Files</h1> 
            <button class="rounded-md text-white p-2 bg-indigo-600 font-semibold text-md shadow-sm ml-auto" onClick={onClickNewFile}>
              New File
            </button>
            <input class="hidden" type="file" ref={fileInput} />
            <button class="rounded-md text-white p-2 bg-indigo-600 font-semibold text-md shadow-sm ml-3">
              New Folder 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
