import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white gap-6">
      <picture>
        <source srcSet="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.webp" type="image/webp" />
        <img
          src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png"
          alt="Fire Pit Logo"
          className="w-40 h-40 object-contain"
          width="160"
          height="160"
        />
      </picture>
      <div className="flex items-center gap-2">
        <span className="animate-spin inline-block w-6 h-6 border-4 border-current border-t-transparent rounded-full" />
        <span className="text-lg font-semibold tracking-wide">Carregando...</span>
      </div>
    </div>
  );
};

export default Loading; 