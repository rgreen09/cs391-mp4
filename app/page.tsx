import DogSearchForm from "@/components/DogSearchForm";

export default function Home() {
  return (
      <div className={"flex flex-col items-center justify-center min-h-screen pt-20"}>
          <DogSearchForm />
      </div>
  );
}
