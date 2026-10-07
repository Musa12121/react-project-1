'use client'

export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8 h-screen w-screen">
      <div className="h-28 w-28 animate-spin rounded-full border-12 border-purple-500 border-t-transparent"/>
    </div>
  );
}