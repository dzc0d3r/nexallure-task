import {render, screen} from '@testing-library/react'
import {Badge} from '@/components/ui/Badge' // Update the path accordingly

describe('Badge component', () => {
    test('renders default badge correctly', () => {
        render(<Badge>Default Badge</Badge>)
        const badge = screen.getByText('Default Badge')
        expect(badge).toBeInTheDocument()
        expect(badge).toHaveClass('rounded-full border-transparent bg-red-100 bg-opacity-64 text-black/75 shadow hover:bg-primary/80')
    })

    test('renders primary badge correctly', () => {
        render(<Badge variant="primary">Primary Badge</Badge>)
        const badge = screen.getByText('Primary Badge')
        expect(badge).toBeInTheDocument()
        expect(badge).toHaveClass('rounded-full border-transparent bg-teal-100 bg-opacity-64 text-black/75 shadow hover:bg-primary/80')
    })
})
