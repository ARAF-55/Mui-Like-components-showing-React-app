import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "kaka",
            label: 'Can I use React on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.',
        },
        {
            id: "Bale",
            label: 'Can I use JavaScript on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.',
        },
        {
            id: "Ronaldo",
            label: 'Can I use CSS on a project',
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.',
        }
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;