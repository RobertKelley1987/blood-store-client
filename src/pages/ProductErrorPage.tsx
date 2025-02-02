import LinkButton from "../components/LinkButton";

function ProductErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center grow gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-center">
          We were unable to locate the product you are looking for.
        </p>
        <p className="text-center">Please try again later. </p>
      </div>
      <LinkButton to="/" text="Return to Store" />
    </main>
  );
}

export default ProductErrorPage;
