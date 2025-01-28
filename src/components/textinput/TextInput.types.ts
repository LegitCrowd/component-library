export interface TextInputProps {
  promptText: string;
  onSubmit: (answer: string) => void;
  placeholder?: string;
  theme?: 'light' | 'dark';
  testIdPrefix?: string;
} 