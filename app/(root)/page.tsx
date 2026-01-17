import SearchForm from "../components/SearchForm";


export default function Home() {
  return (
    <>
    <section className="pink_container pattern">
      <div className="px-8">
    <h1 className="heading  ">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
    </h1>
    </div>
    <p className="sub-heading  max-w-3xl!">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm/>
    </section>
    
    </>
  );
}
