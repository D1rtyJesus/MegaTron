#include "module1.h"
#include "Resource.h"

static std::wstring g_enteredText;

static INT_PTR CALLBACK Dialog1Proc(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_INITDIALOG:
        return (INT_PTR)TRUE;

    case WM_COMMAND:
        if (LOWORD(wParam) == IDOK) 
        {
            WCHAR buffer[256];
            GetDlgItemTextW(hDlg, IDC_EDIT1, buffer, 256);
            g_enteredText = buffer;
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

bool ShowModule1Dialog(HWND hWndParent, HINSTANCE hInstance, std::wstring& outText)
{
    g_enteredText.clear();
    INT_PTR result = DialogBoxParamW(
        hInstance,
        MAKEINTRESOURCE(IDD_DIALOG1),
        hWndParent,
        Dialog1Proc,
        0
    );

    if (result == IDOK)
    {
        outText = g_enteredText;
        return true;
    }
    return false;
}