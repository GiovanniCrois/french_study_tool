export default function LoadingSpinner() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-radial from-cyan-500  to-cyan-700 ">
        <div className="animate-spin rounded-full h-32 w-32 border-8 border-blue-700 border-r-transparent"></div>
      </div>
    </>
  );
}
