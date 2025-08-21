export default function LoadingSpinner({
  size = 'md',
  className = '',
}: { size?: 'sm' | 'md' | 'lg' | 'large'; className?: string }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-primary-200 border-t-primary-500`}
      />
    </div>
  );
}
