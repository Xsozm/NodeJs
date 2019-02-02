// first solution is to pass done to the function if done() 
// is not called the test will fail , you can call done() or don.fail()
// we should call done() after the test code is done and after all expect  
test('works synchronously.', (done) => {
  
  
    setTimeout(()=>{
      expect(4).toBe(4);
    },2000)

    setTimeout(()=>{
        expect(43).toBe(4);
        done();
      },2000)
  });


//If your code uses promises, there is a simpler way to handle asynchronous tests. Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

// For example, let's say that fetchData, instead of using a callback, returns a promise that is supposed to resolve to the string 'peanut butter'. We could test it with:

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

/**.resolves / .rejects
You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});
Be sure to return the assertion—if you omit this return statement, your test will complete before the promise returned from fetchData is resolved and then() has a chance to execute the callback.

If you expect a promise to be rejected use the .rejects matcher. It works analogically to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
}); */

// Alternatively, you can use async and await in your tests. To write an async test, just use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with:

test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

