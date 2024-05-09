from ollama import Client

client = Client(host="http://127.0.0.1:11434/")
prompt = "Give me a list of cities in the state of Wisconsin with a population of over 100,000 people in the form of a JSON array. It should look something like '[\"City 1\", \"City 2\", \"City 3\"]' in the output. Don't include any other text beyond the JSON."

output = client.generate(model="zeart/farmvision_openorca", prompt=prompt)

print(output)