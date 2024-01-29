import { fireEvent, screen, render, waitFor } from "@testing-library/react"
import { Button } from "@/components/ui/Button"
describe("Button component", () => {
  test("renders default button correctly", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByText("Click me")
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "btn bg-slate-50 hover:bg-slate-100 h-12 px-5 py-3 rounded-full",
    )
  })
  test("renders primary button correctly", () => {
    render(<Button variant="primary">Click me</Button>)
    const button = screen.getByText("Click me")
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "btn bg-gray-900 text-white hover:bg-gray-800 h-12 px-5 py-3 rounded-full",
    )
  })
  test("handles click event correctly", async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByText("Click me")

    fireEvent.click(button)
    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
