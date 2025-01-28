export const detectFakeNews = (headline) => {
    // Mock logic for fake news detection
    const keywords = ["clickbait", "shocking", "unbelievable", "hoax"];
    const isFake = keywords.some((word) => headline.toLowerCase().includes(word));
  
    return {
      isFake,
      confidence: isFake ? 85 : 95, // Mock confidence score
    };
  };
  