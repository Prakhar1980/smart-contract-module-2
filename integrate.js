window.addEventListener('load', async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. You should consider installing MetaMask.');
    return;
  }

  // Define contract ABI and address
  const contractABI = [
    // Your contract ABI array here
  ];
  const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; // Example address

  // Create contract instance
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  // Function to increment the balance
  window.incrementBalance = async () => {
    try {
      await contractInstance.methods.incrementBalance().send({ from: web3.eth.defaultAccount });
      console.log('Balance incremented successfully.');
    } catch (error) {
      console.error('Error incrementing balance:', error);
    }
  };

  // Function to decrement the balance
  window.decrementBalance = async () => {
    try {
      await contractInstance.methods.decrementBalance().send({ from: web3.eth.defaultAccount });
      console.log('Balance decremented successfully.');
    } catch (error) {
      console.error('Error decrementing balance:', error);
    }
  };

  // Function to get the current balance
  window.getBalance = async () => {
    try {
      const value = await contractInstance.methods.getBalance().call();
      document.getElementById('currentValue').innerText = value;
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  // Example usage: Triggering incrementBalance on button click
  document.getElementById('incrementButton').addEventListener('click', () => {
    window.incrementBalance();
  });

  // Example usage: Triggering decrementBalance on button click
  document.getElementById('decrementButton').addEventListener('click', () => {
    window.decrementBalance();
  });

  // Initial fetch of balance
  window.getBalance();
});
