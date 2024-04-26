# `organizationProgrammaticUser` Submodule <a name="`organizationProgrammaticUser` Submodule" id="@cdktf/provider-spotinst.organizationProgrammaticUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationProgrammaticUser <a name="OrganizationProgrammaticUser" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user spotinst_organization_programmatic_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUser(Construct Scope, string Id, OrganizationProgrammaticUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig">OrganizationProgrammaticUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig">OrganizationProgrammaticUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts">PutAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds">ResetUserGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccounts` <a name="PutAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts"></a>

```csharp
private void PutAccounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts.parameter.value"></a>

- *Type:* object

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies"></a>

```csharp
private void PutPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies.parameter.value"></a>

- *Type:* object

---

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts"></a>

```csharp
private void ResetAccounts()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetUserGroupIds` <a name="ResetUserGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds"></a>

```csharp
private void ResetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationProgrammaticUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OrganizationProgrammaticUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OrganizationProgrammaticUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OrganizationProgrammaticUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OrganizationProgrammaticUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrganizationProgrammaticUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationProgrammaticUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationProgrammaticUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationProgrammaticUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput">AccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput">PoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput">UserGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds">UserGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts"></a>

```csharp
public OrganizationProgrammaticUserAccountsList Accounts { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a>

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies"></a>

```csharp
public OrganizationProgrammaticUserPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a>

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput"></a>

```csharp
public object AccountsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput"></a>

```csharp
public object PoliciesInput { get; }
```

- *Type:* object

---

##### `UserGroupIdsInput`<sup>Optional</sup> <a name="UserGroupIdsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput"></a>

```csharp
public string[] UserGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UserGroupIds`<sup>Required</sup> <a name="UserGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds"></a>

```csharp
public string[] UserGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationProgrammaticUserAccounts <a name="OrganizationProgrammaticUserAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserAccounts {
    string AccountId,
    string AccountRole
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole">AccountRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}.

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole"></a>

```csharp
public string AccountRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}.

---

### OrganizationProgrammaticUserConfig <a name="OrganizationProgrammaticUserConfig" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Accounts = null,
    string Description = null,
    string Id = null,
    object Policies = null,
    string[] UserGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts">Accounts</a></code> | <code>object</code> | accounts block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies">Policies</a></code> | <code>object</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds">UserGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}.

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts"></a>

```csharp
public object Accounts { get; set; }
```

- *Type:* object

accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#accounts OrganizationProgrammaticUser#accounts}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies"></a>

```csharp
public object Policies { get; set; }
```

- *Type:* object

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#policies OrganizationProgrammaticUser#policies}

---

##### `UserGroupIds`<sup>Optional</sup> <a name="UserGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds"></a>

```csharp
public string[] UserGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}.

---

### OrganizationProgrammaticUserPolicies <a name="OrganizationProgrammaticUserPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserPolicies {
    string[] PolicyAccountIds,
    string PolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds">PolicyAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}. |

---

##### `PolicyAccountIds`<sup>Required</sup> <a name="PolicyAccountIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds"></a>

```csharp
public string[] PolicyAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.1/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationProgrammaticUserAccountsList <a name="OrganizationProgrammaticUserAccountsList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get"></a>

```csharp
private OrganizationProgrammaticUserAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationProgrammaticUserAccountsOutputReference <a name="OrganizationProgrammaticUserAccountsOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput">AccountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole">AccountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountRoleInput`<sup>Optional</sup> <a name="AccountRoleInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput"></a>

```csharp
public string AccountRoleInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountRole`<sup>Required</sup> <a name="AccountRole" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole"></a>

```csharp
public string AccountRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationProgrammaticUserPoliciesList <a name="OrganizationProgrammaticUserPoliciesList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get"></a>

```csharp
private OrganizationProgrammaticUserPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationProgrammaticUserPoliciesOutputReference <a name="OrganizationProgrammaticUserPoliciesOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OrganizationProgrammaticUserPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput">PolicyAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds">PolicyAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyAccountIdsInput`<sup>Optional</sup> <a name="PolicyAccountIdsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput"></a>

```csharp
public string[] PolicyAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PolicyAccountIds`<sup>Required</sup> <a name="PolicyAccountIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds"></a>

```csharp
public string[] PolicyAccountIds { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



