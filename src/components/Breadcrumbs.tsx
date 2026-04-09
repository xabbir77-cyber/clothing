import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-500 hover:text-[#f7a4af] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-gray-500 hover:text-[#f7a4af] transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[#f7a4af] font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
