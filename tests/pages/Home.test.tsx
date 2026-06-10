import { it, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "../../src/pages/Home"
import "@testing-library/jest-dom/vitest"

describe("group", () => {
  it("should", () => {
    render(<Home />)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
  })
})
