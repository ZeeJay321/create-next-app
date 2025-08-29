import "./blog.css";

export default function Page() {
  return (
    <div>
      <h1 className="new-txt">Hello, Im Blog</h1>

      {/* First Grid */}
      <span className="grid-example-1">
        <span className="grid-item">01</span>
        <span className="grid-item">02</span>
        <span className="grid-item">03</span>
        <span className="grid-item">04</span>
        <span className="grid-item">05</span>
        <span className="grid-item">06</span>
      </span>

      {/* Second Grid */}
      <div className="grid-example-2">
        <div className="grid-item">01</div>
        <div className="grid-item">02</div>
        <div className="grid-item">03</div>
        <div className="grid-item">04</div>
        <div className="grid-item">05</div>
        <div className="grid-item">06</div>
      </div>

      {/* Third Grid */}
      <div className="grid-example-3">
        <div className="grid-item-span-col">01</div>
        <div className="grid-item-span-row">06</div>
        <div className="grid-item">02</div>
        <div className="grid-item">03</div>
        <div className="grid-item">04</div>
        <div className="grid-item">05</div>
      </div>
    </div>
  );
}
