import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-32">
          <h1 className="text-6xl font-bold">
            Welcome to Webnivers
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            We engineer technical growth systems using websites,
            funnels, automation and AI.
          </p>
        </div>
      </Container>
    </main>
  );
}