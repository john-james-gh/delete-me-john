interface GreetingParams {
  name: string;
}

export function Greeting(params: GreetingParams) {
  return (
    <div>
      <h1>Hello, {params.name}</h1>
      <p>How are you doing today?</p>
      <input type="text" placeholder="Type your name" />
    </div>
  );
}
