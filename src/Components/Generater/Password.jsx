import { useState } from "react";

function Password() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [range, setRange] = useState(8);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    setCopied(false);
    const ustring = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lstring = "qwertyuiopasdfghjklzxcvbnm";
    const nstring = "123456789";
    const sstring = "[],.<>?/]";
    let addstring = "";

    if (!uppercase && !lowercase && !number && !symbol) {
      addstring += ustring;
      setUppercase(true);
    }
    if (uppercase) addstring += ustring;
    if (lowercase) addstring += lstring;
    if (number) addstring += nstring;
    if (symbol) addstring += sstring;

    let passwordGenerated = "";
    for (let i = 0; i < range; i++) {
      let randomnumber = Math.floor(Math.random() * addstring.length);
      passwordGenerated += addstring[randomnumber];
    }

    setPassword(passwordGenerated);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="min-h-[80vh]  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h1>

        <div className="flex mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-3  rounded-l-lg border border-primary outline-0"
            placeholder="Your password will appear here"
            readOnly
            value={password}
          />
          <button
            className={`px-4 py-3 rounded-r-lg font-medium transition-colors ${
              copied ? "bg-secondary text-primary" : "bg-primary text-white"
            }`}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-gray-700">
                Password Length: <span className="font-medium">{range}</span>
              </label>
              <span className="text-gray-500 text-sm">{range} characters</span>
            </div>
            <input
              type="range"
              min="8"
              max="32"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="uppercase"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
                className="w-4 h-4 accent-primary"
              />
              <label htmlFor="uppercase" className="ml-2 text-gray-700">
                Uppercase
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="lowercase"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
                className="w-4 h-4 accent-primary"
              />
              <label htmlFor="lowercase" className="ml-2 text-gray-700">
                Lowercase
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={number}
                onChange={() => setNumber(!number)}
                className="w-4 h-4 accent-primary"
              />
              <label htmlFor="numbers" className="ml-2 text-gray-700">
                Numbers
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                checked={symbol}
                onChange={() => setSymbol(!symbol)}
                className="w-4 h-4 accent-primary"
              />
              <label htmlFor="symbols" className="ml-2 text-gray-700">
                Symbols
              </label>
            </div>
          </div>

          <button
            onClick={generatePassword}
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-md"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
