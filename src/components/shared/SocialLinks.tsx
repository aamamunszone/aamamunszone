import Link from 'next/link';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <Link href="https://github.com/aamamunszone" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <Link href="https://linkedin.com/in/aamamunszone" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <Link href="https://facebook.com/aamamunszone" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <Link href="https://twitter.com/aamamunszone" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>
    </div>
  );
};

export default SocialLinks;