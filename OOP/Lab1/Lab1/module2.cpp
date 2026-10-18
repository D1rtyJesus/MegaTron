#include "module2.h"
#include "Resource.h"

static int g_currentScrollValue = 1;

static INT_PTR CALLBACK Dialog2Proc(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
    HWND hScrollBar = GetDlgItem(hDlg, IDC_SCROLLBAR1);

    switch (message)
    {
    case WM_INITDIALOG:
    {
        SCROLLINFO si = { 0 };
        si.cbSize = sizeof(si);
        si.fMask = SIF_RANGE | SIF_POS;
        si.nMin = 1;
        si.nMax = 100;
        si.nPos = g_currentScrollValue;
        SetScrollInfo(hScrollBar, SB_CTL, &si, TRUE);
        return (INT_PTR)TRUE;
    }

    case WM_HSCROLL:
    {
        if ((HWND)lParam == hScrollBar)
        {
            SCROLLINFO si = { 0 };
            si.cbSize = sizeof(si);
            si.fMask = SIF_ALL;
            GetScrollInfo(hScrollBar, SB_CTL, &si);

            switch (LOWORD(wParam))
            {
            case SB_LINELEFT:
                si.nPos -= 1;
                break;
            case SB_LINERIGHT:
                si.nPos += 1;
                break;
            case SB_PAGELEFT:
                si.nPos -= 10;
                break;
            case SB_PAGERIGHT:
                si.nPos += 10;
                break;
            case SB_THUMBTRACK:
            case SB_THUMBPOSITION:
                si.nPos = si.nTrackPos;
                break;
            }

            if (si.nPos < 1) si.nPos = 1;
            if (si.nPos > 100) si.nPos = 100;

            si.fMask = SIF_POS;
            SetScrollInfo(hScrollBar, SB_CTL, &si, TRUE);
            g_currentScrollValue = si.nPos;
        }
        return (INT_PTR)TRUE;
    }

    case WM_COMMAND:
        if (LOWORD(wParam) == IDOK) 
        {
            EndDialog(hDlg, IDOK);
            return (INT_PTR)TRUE;
        }
        else if (LOWORD(wParam) == IDCANCEL) 
        {
            EndDialog(hDlg, IDCANCEL);
            return (INT_PTR)TRUE;
        }
        break;
    }
    return (INT_PTR)FALSE;
}

bool ShowModule2Dialog(HWND hWndParent, HINSTANCE hInstance, int& outValue)
{
    g_currentScrollValue = 1;
    INT_PTR result = DialogBoxParamW(
        hInstance,
        MAKEINTRESOURCE(IDD_DIALOG2),
        hWndParent,
        Dialog2Proc,
        0
    );

    if (result == IDOK)
    {
        outValue = g_currentScrollValue;
        return true;
    }
    return false;
}