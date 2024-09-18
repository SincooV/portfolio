import { useEffect, useState } from 'react';

const NameSaver = () => {
  const [name, setName] = useState('');
  const [isH1Visible, setH1Visible] = useState(true);
  const [isInputVisible, setInputVisible] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setName(savedName);
      setInputVisible(false);
    }
    
  }, []);

  useEffect(() => {
    if (name) {
      localStorage.setItem('savedName', name);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInputVisible(false);

    }
  };

  const handleReset = () => {
    localStorage.removeItem('savedName');
    setName('');
    setInputVisible(true);
    setH1Visible(false);

  };
  

  return (
    <div>
        
      
        {isH1Visible ? (
            
            <h1>Hello</h1>
          
        ) :(
            <h1></h1>
            
        )
        }
      {isInputVisible ? (
        <input
          type="text"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your name"
        />
      ) : (
        <div>
          <h1>Welcome! {name}</h1>
          <button onClick={handleReset}>Reset Name</button>
        </div>
      )}
    </div>
  );
};

export default NameSaver;
