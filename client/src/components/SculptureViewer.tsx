import { FC, useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SculptureViewerProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
  alt?: string;
}

const SculptureViewer: FC<SculptureViewerProps> = ({ 
  imageSrc, 
  title,
  description,
  className,
  alt
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastPos.x;
    const deltaY = e.clientY - lastPos.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastPos({ 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - lastPos.x;
    const deltaY = e.touches[0].clientY - lastPos.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastPos({ 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
  };
  
  // Reset values when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setRotation({ x: 0, y: 0 });
        setZoom(1);
      }, 300); // Slight delay to allow closing animation
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={`relative cursor-pointer overflow-hidden rounded-md ${className || ""} group shadow-md hover:shadow-2xl transition-all duration-300`}>
          <img 
            src={imageSrc} 
            alt={alt || title} 
            className="rounded-md w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading font-semibold text-white">{title}</DialogTitle>
          <DialogDescription className="text-gray-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div 
          className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden rounded-md mt-4 bg-black flex items-center justify-center"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="transition-all duration-500 ease-out w-full h-full flex items-center justify-center" 
            style={{ 
              transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          >
            <img 
              src={imageSrc} 
              alt={alt || title} 
              className="max-h-[90%] max-w-[90%] object-contain"
              draggable="false"
              style={{ 
                filter: 'drop-shadow(0 30px 20px rgba(0, 0, 0, 0.8))',
                transform: 'translateZ(40px)'
              }}
            />
          </div>
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button 
              onClick={handleZoomIn}
              variant="secondary" 
              size="sm" 
              className="bg-gray-800 text-white"
            >
              <i className="fas fa-search-plus"></i>
            </Button>
            <Button 
              onClick={handleZoomOut}
              variant="secondary" 
              size="sm" 
              className="bg-gray-800 text-white"
            >
              <i className="fas fa-search-minus"></i>
            </Button>
            <Button 
              onClick={handleReset}
              variant="secondary" 
              size="sm" 
              className="bg-gray-800 text-white"
            >
              <i className="fas fa-sync-alt"></i>
            </Button>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-2">
          <p>Drag to rotate • Use buttons to zoom • Click the reset button to reset view</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SculptureViewer;