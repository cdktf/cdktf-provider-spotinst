# `provider`

Refer to the Terraform Registory for docs: [`spotinst`](https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-spotinst.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotinstProvider <a name="SpotinstProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs spotinst}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new SpotinstProvider(Construct Scope, string Id, SpotinstProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags">ResetFeatureFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetFeatureFlags` <a name="ResetFeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags"></a>

```csharp
private void ResetFeatureFlags()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

SpotinstProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

SpotinstProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

SpotinstProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput">FeatureFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags">FeatureFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `FeatureFlagsInput`<sup>Optional</sup> <a name="FeatureFlagsInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput"></a>

```csharp
public string FeatureFlagsInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `FeatureFlags`<sup>Optional</sup> <a name="FeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags"></a>

```csharp
public string FeatureFlags { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotinstProviderConfig <a name="SpotinstProviderConfig" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new SpotinstProviderConfig {
    string Account = null,
    string Alias = null,
    string FeatureFlags = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account">Account</a></code> | <code>string</code> | Spotinst Account ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags">FeatureFlags</a></code> | <code>string</code> | Spotinst SDK Feature Flags. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token">Token</a></code> | <code>string</code> | Spotinst Personal API Access Token. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Spotinst Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs#account SpotinstProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs#alias SpotinstProvider#alias}

---

##### `FeatureFlags`<sup>Optional</sup> <a name="FeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags"></a>

```csharp
public string FeatureFlags { get; set; }
```

- *Type:* string

Spotinst SDK Feature Flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs#feature_flags SpotinstProvider#feature_flags}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Spotinst Personal API Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.2/docs#token SpotinstProvider#token}

---



