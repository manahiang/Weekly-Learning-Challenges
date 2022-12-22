import React, { useState } from 'react'
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme
} from '@mantine/core';


function Test() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            style={{
                main: {
                    background: theme.colorScheme === 'dark' ?
                        theme.colors.dark[9] : theme.colors.red[6],
                }
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Text align='center' color="red">This is the navbar</Text>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>This is sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} px="md">
                    This is footer
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignIems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger opened={!opened} onClick={() => setOpened((hello) => !hello)} size="sm" mr="xl" />
                        </MediaQuery>
                        <Text>Header</Text>
                    </div>
                </Header>
            }
        >
            <Text>Responsive navbar in action</Text>
        </ AppShell>
    )
}

export default Test