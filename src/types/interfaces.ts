export interface ContactsSectionProps {
  mainContent: {
    response: string;
    email: string;
    place: string;
    phone: string;
    privacy: string;
    manager1: {
      name: string;
      title: string;
    };
    manager2: {
      name: string;
      title: string;
    };
  };
}
